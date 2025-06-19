provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "foodtime_bucket" {
  bucket = "foodtime-deploy-bucket"
  acl    = "public-read"
}
