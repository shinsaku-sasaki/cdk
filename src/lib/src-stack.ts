import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class SrcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // example of creating a lambda function
    // const hello = new cdk.aws_lambda.Function(this, "HelloHandlerFunction", {
    //   functionName:"HelloHandler",
    //   runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
    //   code: cdk.aws_lambda.Code.fromAsset("lambda"),
    //   handler: "hello.handler",
    // });
  }
}
