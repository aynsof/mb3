import boto3
import json
from lambda_decorators import cors_headers
import datetime
import time

@cors_headers
def lambda_handler(event,context):
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')
    table = dynamodb.Table('acorn2')

    dt = datetime.datetime.now()
    
    item = json.loads(event['body'])
    
    dynamo_res = table.put_item(
      Item={
            'UserID': item['UserID'],
            'Report': item['Report'],
            'Date': str(time.mktime(dt.timetuple()))
        }
    )

    # create a response
    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        },
        "body": json.dumps(dynamo_res)
    }

    return response

def main():
    lambda_handler(0,0)

if __name__ == '__main__':
    main()