- User
  - name STRING
  - email STRING
- Account
  - type: [personal, company]
  - name STRING
- AccountRole
  - permission: [admin, member, guest]
  - user: ObjectId (User)
  - account: ObjectId (Account)