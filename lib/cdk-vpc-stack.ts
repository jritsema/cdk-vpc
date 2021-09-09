import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkVpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create public and private subnets per Availability Zone.
    // Network routing for the public subnets will be configured to allow
    // outbound access directly via an Internet Gateway.
    // Network routing for the private subnets will be configured to allow
    // outbound access via a set of resilient NAT Gateways (one per AZ)
    const vpc = new ec2.Vpc(this, 'VPC', {
      cidr: "10.0.0.0/24"
    });


    //outputs

    new cdk.CfnOutput(this, 'vpcid', {
      value: vpc.vpcId,
      description: 'The id of the vpc',
      exportName: 'thevpc',
    });

    new cdk.CfnOutput(this, 'private-subnet-1', {
      value: vpc.privateSubnets[0].subnetId,
      description: 'private subnet 1',
      exportName: 'private-subnet-1',
    });

    new cdk.CfnOutput(this, 'private-subnet-2', {
      value: vpc.privateSubnets[1].subnetId,
      description: 'private subnet 2',
      exportName: 'private-subnet-2',
    });

    new cdk.CfnOutput(this, 'public-subnet-1', {
      value: vpc.publicSubnets[0].subnetId,
      description: 'public subnet 1',
      exportName: 'public-subnet-1',
    });

    new cdk.CfnOutput(this, 'public-subnet-2', {
      value: vpc.publicSubnets[1].subnetId,
      description: 'public subnet 2',
      exportName: 'public-subnet-2',
    });

    new cdk.CfnOutput(this, 'private-subnets', {
      value: vpc.privateSubnets.map(s => s.subnetId).join(","),
      description: 'private subnets, comma delimited',
      exportName: 'private-subnets',
    });

    new cdk.CfnOutput(this, 'public-subnets', {
      value: vpc.publicSubnets.map(s => s.subnetId).join(","),
      description: 'public subnets, comma delimited',
      exportName: 'public-subnets',
    });

  }
}
