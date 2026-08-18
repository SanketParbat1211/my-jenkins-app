pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub वरून कोड पुल केला जात आहे...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'NodeJS पॅकेजेस इन्स्टॉल करत आहे...'
                sh 'npm install'
            }
        }
        stage('Run App') {
            steps {
                echo 'वेब ॲप्लिकेशन सुरू करत आहे...'
                // JENKINS_NODE_COOKIE=dontKillMe वापरल्याने process background ला नक्की चालू राहील
                sh 'JENKINS_NODE_COOKIE=dontKillMe nohup npm start > app.log 2>&1 &'
            }
        }
    }
}
