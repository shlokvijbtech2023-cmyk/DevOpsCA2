pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                /Library/Frameworks/Python.framework/Versions/3.14/bin/python3 -m pip install selenium webdriver-manager
                '''
            }
        }

        stage('Run Test') {
            steps {
                sh '''
                cd /Users/shlokvij/DevOpsCA2
                /Library/Frameworks/Python.framework/Versions/3.14/bin/python3 test_feedback.py
                '''
            }
        }

    }
}