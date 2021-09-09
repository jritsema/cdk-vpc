# cdk-vpc

Provisions a vanilla AWS VPC with public and private subnets per AZ.  Network routing for the public subnets will be configured to allow outbound access directly via an Internet Gateway.  Network routing for the private subnets will be configured to allow outbound access via a set of resilient NAT Gateways (one per AZ).

### usage

```
npm install
make deploy
```

### develop

```
 Choose a make command to run

  watch    watch for changes and compile
  diff     compare deployed stack with current state
  synth    emits the synthesized CloudFormation template
  deploy   deploy this stack to your default AWS account/region
```