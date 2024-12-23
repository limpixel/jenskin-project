pipeline {
    agent any
    stages {
        stage('Install Node.js') {
            steps {
                echo 'Installing Node.js...'
                sh '''
                # Download Node.js setup script
                curl -fsSL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
                # Run setup script
                sudo bash nodesource_setup.sh
                # Install Node.js
                sudo apt-get install -y nodejs
                # Verify installation
                node -v
                npm -v
                '''
            }
        }
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from GitHub...'
                git branch: 'main', url: 'https://github.com/limpixel/jenskin-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Test Website') {
            steps {
                echo 'Running website tests...'
                sh 'node test-website.js'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                sh '''
                mkdir -p /var/www/html/my-website
                cp -r dist/* /var/www/html/my-website/
                '''
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
