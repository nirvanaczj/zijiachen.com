from bert_serving.client import BertClient
from flask import Flask, escape, request, jsonify ,send_from_directory
from flask_cors import CORS, cross_origin
from scipy.spatial import distance
import pandas as pd
import requests
import scipy.spatial.distance as spd
from bson.objectid import ObjectId
import pymongo
import dnspython
import json
import tensorflow as tf
import tensorflow_hub as hub
from bson.json_util import dumps

bc = BertClient('104.197.70.39')
app = Flask(__name__, static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

mongodbUri =  'mongodb+srv://view:8Erlp4kcwdO3DSGz@stadyapp-hqpe8.mongodb.net/stadyapp?retryWrites=true&w=majority'

client = pymongo.MongoClient(mongodbUri)
db = client.get_database('stadyapp')
users = db.users
tutors = db.tutors

@app.route('/bert', methods=['POST'])
@cross_origin()
def bertencode():
    if request.method == 'POST':
        data = request.get_json()
        # here data = {'query':'Hello'}
        returnraw = bc.encode(data['query'])
        if(len(data['query']) == 2):
            cosine_distance = distance.cosine(returnraw[0],returnraw[1])
            euclidean_distance = distance.euclidean(returnraw[0],returnraw[1])
        else:
            cosine_distance = 'Distance is disabled for more or less than two queries entered'
            euclidean_distance = 'Distance is disabled for more or less than two queries entered' 
        returndata = []
        for i in range(len(data['query'])):
            returndata.append(returnraw[i].tolist())
        return jsonify({'prediction': returndata,'cosine':cosine_distance,'euclidean':euclidean_distance})
    
    
module_url = "https://tfhub.dev/google/universal-sentence-encoder-large/3"

@app.route('/tf', methods=['POST'])
@cross_origin()
def tfencode():
    if request.method == 'POST':
        data = request.get_json()
        # here data = {'query':'Hello'}
        with tf.Session() as session:
            embed = hub.Module(module_url)
            session.run([tf.global_variables_initializer(), tf.tables_initializer()])
            message_embeddings = session.run(embed(data['query']))
        if(len(data['query']) == 2):
            cosine_distance = distance.cosine(message_embeddings[0],message_embeddings[1])
            euclidean_distance = distance.euclidean(message_embeddings[0],message_embeddings[1])
        else:
            cosine_distance = 'Distance is disabled for more or less than two queries entered'
            euclidean_distance = 'Distance is disabled for more or less than two queries entered' 

        returndata = []
        for i in range(len(data['query'])):
            returndata.append(message_embeddings[i].tolist())
        return jsonify({'prediction': returndata,'cosine':cosine_distance,'euclidean':euclidean_distance})
    
@app.route('/courses', methods=['POST'])
@cross_origin()
def returnTutorbyCourses():
    if request.method == 'POST':
        data = request.get_json()
        # here data = {'query':'Hello'}
        tutorcourse = open("Output.txt", "r")
        b = json.loads(tutorcourse.read())
        message_encoded = bc.encode(data['input'])
        dist = {}
        tutorid = []
        distance = []
        courses = []
        for i in range(len(b)):
            tutorid.append(b[i][0])
            distance.append(spd.cosine(message_encoded,b[i][2]))
            courses.append(b[i][1])
            dist = {'id':tutorid,'courses':courses,'distance':distance}
        
        res = pd.DataFrame.from_dict(dist)
        res.sort_values(by=['distance'],inplace = True)

        top_20_tutors = res['id'][0:20].tolist()
        top_20_courses = res['courses'][0:20].tolist()
        tutors_dict = {'id':top_20_tutors,'course':top_20_courses}
        tutors_df = pd.DataFrame(data = tutors_dict)
        tutors_df.drop_duplicates(subset='id',inplace = True)

        topobj = []
        for i in range(tutors_df.shape[0]):
            topobj.append(ObjectId(tutors_df.iloc[i,1]))
        
        tutors_df['id'] = topobj
        
        tutors_res = []
        for i in range(tutors_df.shape[0]):
            pipeline = [
              {"$match":{"_id":(list(tutors_df['id'])[i])}},
              {
               "$lookup":
                 {
                   'from': "users",
                   'localField': "user",
                   'foreignField': "_id",
                   'as': "user"
                 }},
              {
               "$lookup":
                 {
                   'from': "schools",
                   'localField': "user.school",
                   'foreignField': "_id",
                   'as': "school"
                 }},
               {
               "$lookup":
                 {
                   'from': "badges",
                   'localField': "badges",
                   'foreignField': "_id",
                   'as': "badges"
                 }},
                {
                "$project":{
                    '_id':1,
                    'user.username':1,
                    'user.bio':1,
                    'user.major':1,
                    'user.photoId':1,
                    'badges':1,
                    'hourRate':1,
                    'school.name':1,
                    'experiences':{ '$arrayElemAt': [ "$experiences", 0 ] },
                    'averageScore':{ '$avg': "$requests.rating.score"},
                    'courseRelated':(list(tutors_df['course'])[i])
                }
                }
            ]
            tutors_res.append(list(tutors.aggregate(pipeline)))        
        return dumps(tutors_res)     
            
            

@app.route('/schools', methods=['POST'])
@cross_origin()
def returnTutorbySchools():
    if request.method == 'POST':
        data = request.get_json()
        # here data = {'query':'Hello'}
        school = data['input'][0]
        pipeline_school = [
      {
       "$lookup":
         {
           'from': "users",
           'localField': "user",
           'foreignField': "_id",
           'as': "user"
         }},
      {
       "$lookup":
         {
           'from': "schools",
           'localField': "user.school",
           'foreignField': "_id",
           'as': "school"
         }},
      {
       "$lookup":
         {
           'from': "schools",
           'localField': "education.school",
           'foreignField': "_id",
           'as': "education"
         }},
       {
       "$lookup":
         {
           'from': "badges",
           'localField': "badges",
           'foreignField': "_id",
           'as': "badges"
         }},
       {"$match":{"$or":[{'school.name':school},{'education.name':school}]}},
        {
        "$project":{
            '_id':1,
            'user.username':1,
            'user.bio':1,
            'user.major':1,
            'user.photoId':1,
            'badges':1,
            'hourRate':1,
            'school.name':1,
            'education':1,
            'experiences':{ '$arrayElemAt': [ "$experiences", 0 ] },
            'averageScore':{ '$avg': "$requests.rating.score"}
        }
        }
    ]
        tutors_school_res_temp = list(tutors.aggregate(pipeline_school))
        
        tutors_school_res = []
        
        for k in range(len(tutors_school_res_temp)):
            tutors_school_res.append([tutors_school_res_temp[k]])
        return dumps(tutors_school_res)

@app.route('/name', methods=['GET'])
@cross_origin()
def returnTutorbyNames():
    if request.method == 'GET':
        data = request.args.get('name')
        pipeline = [
#       {"$match":{"_id":(list(tutors_df['id'])[i])}},
      {
       "$lookup":
         {
           'from': "users",
           'localField': "user",
           'foreignField': "_id",
           'as': "user"
         }},
        {
        "$project":{
            '_id':1,
            'user.username':1,
        }
        }
    ]
        tutors_res = (list(tutors.aggregate(pipeline)))
        tutors_df = pd.DataFrame(data = tutors_res)
        users_df =  pd.DataFrame(list(tutors_df['user'][i][0] for i in range(tutors_df.shape[0])))
        tutors_full = pd.concat([users_df,tutors_df],axis=1).drop('user',axis=1)
        tutor_one = tutors_full[tutors_full['username'].str.contains(data,case = False)]
        return (dumps(tutor_one.to_dict('index')))
        
@app.route('/newReq', methods=['GET'])
@cross_origin()
def returnNewest():
    if request.method == 'GET':
        pipeline = [

              {"$project":{"requests":1,"_id":1, "user":1}},
              {"$unwind":"$requests"},     
              {
                "$lookup":
                   {
                       'from':'users',
                       'localField': "requests.fromUser",
                       'foreignField': "_id",
                       'as': "request_user_profile"
                   }
               },
               {"$lookup":
                 {
                   'from': "users",
                   'localField': "user",
                   'foreignField': "_id",
                   'as': "tutor_user_profile"
                 }},
               {"$match":{"request_user_profile":{"$ne":[]}}},
        ]

        requests_list = list(tutors.aggregate(pipeline))
        rl = pd.DataFrame(list(requests_list))
        rl['tutor_email'] = (list(rl['tutor_user_profile'][i][0]['email'] for i in range(rl.shape[0])))
        rl['tutor_username'] = (list((rl['tutor_user_profile'][i][0]['username'] for i in range(rl.shape[0]))))
        rl['user_email'] = (list(rl['request_user_profile'][i][0]['email'] for i in range(rl.shape[0])))
        rl['user_username'] = (list(rl['request_user_profile'][i][0]['username'] for i in range(rl.shape[0])))
        rl['createdDate'] = pd.DataFrame(list(rl['requests'][i]['createdDate'] for i in range(rl.shape[0])))
        del rl['tutor_user_profile']
        del rl['request_user_profile']
        del rl['requests']       
        rl.sort_values(by='createdDate',inplace = True)
        rl.rename(columns={'_id':'tutor_id','user':'tutor_user_id'}, inplace = True)
        rl_final = rl[rl['user_email'] !='team@stady.info']
#        rl_final.iloc[-1,:].to_dict()
        return dumps(rl_final.iloc[-1,:].to_dict())


@app.route('/static/<path:path>')
@cross_origin()
def send_static(path):
    return send_from_directory('static', path)