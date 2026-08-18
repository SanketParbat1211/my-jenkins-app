pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub वरून कोड पुल केला जात आहे...'
                git branch: 'main', url: 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git'
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
                // बॅकग्राउंडला चालवण्यासाठी nohup वापरला आहे
                sh 'nohup npm start &'
            }
        }
    }
}
