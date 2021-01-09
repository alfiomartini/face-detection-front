# Face Detection

This is a React application, built on top of the [Clarifai](https://www.clarifai.com/model-gallery) Predict API using the [FACE_DETECT_MODEL](https://www.clarifai.com/models/face-detection) to detect faces in image files. If human faces are detected, the model will also return the coordinate locations of those faces with a bounding box. These bounding boxes are then converted to pixel units and then shown on the image using a couple of CSS tricks. The back-end is implemented with _Node.js_, _Express_, _PostGres_ and the SQL query builder [Knex.js](http://knexjs.org/). I have styled the application using _CSS_ and _Bootstrap_.
