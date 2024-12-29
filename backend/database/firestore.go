package database

import (
	"context"
	"encoding/json"
	"log"
	"os"

	firebase "firebase.google.com/go"
	"github.com/joho/godotenv"
	"google.golang.org/api/option"
)

var App *firebase.App

func FireStoreInit() error {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("環境変数ファイルの読み込みに失敗しました: %v", err)
	}

	privateKey := os.Getenv("FIREBASE_PRIVATE_KEY")
	projectID := os.Getenv("FIREBASE_PROJECT_ID")
	clientEmail := os.Getenv("FIREBASE_CLIENT_EMAIL")
	tokenURI := os.Getenv("FIREBASE_TOKEN_URI")

	if privateKey == "" || projectID == "" || clientEmail == "" || tokenURI == "" {
		log.Fatal("必須の環境変数が設定されていません")
	}

	// JSON形式の文字列を作成
	config := map[string]string{
		"type":                        "service_account",
		"project_id":                  projectID,
		"private_key_id":              os.Getenv("FIREBASE_PRIVATE_KEY_ID"),
		"private_key":                 privateKey,
		"client_email":                clientEmail,
		"client_id":                   os.Getenv("FIREBASE_CLIENT_ID"),
		"auth_uri":                    os.Getenv("FIREBASE_AUTH_URI"),
		"token_uri":                   tokenURI,
		"auth_provider_x509_cert_url": os.Getenv("FIREBASE_AUTH_PROVIDER_X509_CERT_URL"),
		"client_x509_cert_url":        os.Getenv("FIREBASE_CLIENT_X509_CERT_URL"),
	}

	// 設定をファイルとして扱うために JSON に変換
	serviceAccountJSON, err := json.Marshal(config)
	if err != nil {
		return err
	}

	// サービスアカウントの認証ファイルを指定
	opt := option.WithCredentialsJSON(serviceAccountJSON)

	// Firebaseプロジェクトの初期化
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalf("Firebaseの初期化に失敗しました: %v", err)
	}

	App = app
	return nil
}
