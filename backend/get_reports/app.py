import boto3
import json
from lambda_decorators import cors_headers

@cors_headers
def lambda_handler(event,context):
    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')
    table = dynamodb.Table('acorn2')
    
    dynamo_res = table.scan()

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