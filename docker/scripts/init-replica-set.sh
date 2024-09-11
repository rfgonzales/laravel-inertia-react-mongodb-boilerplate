#!/bin/bash

# Wait for MongoDB to start
sleep 10

# Initialize the replica set
mongosh --host mongodb-primary:27017 --eval <<EOF
  rs.initiate({
    _id: 'rs0',
    version: 1,
    members: [
      { _id: 0, host: 'mongodb-primary:27017' },
      { _id: 1, host: 'mongodb-secondary:27017' },
      { _id: 2, host: 'mongodb-tertiary:27017' }
    ]
  });
EOF
