# cdk-vpc

Provisions a vanilla AWS VPC with public and private subnets per AZ.  Network routing for the public subnets will be configured to allow outbound access directly via an Internet Gateway.  Network routing for the private subnets will be configured to allow outbound access via a set of resilient NAT Gateways (one per AZ).

### usage

```
npm install
npx cdk deploy
```
