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

  }
}
