package api

import (
	"context"
	"fmt"
	"log"

	"github.com/noko-nokono/my-blog/backend/database"
	"google.golang.org/api/iterator"
)

type Blog struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
}

func GetBlogsHandler() ([]Blog, error) {
	var results []Blog

	client, err := database.App.Firestore(context.Background())
	if err != nil {
		log.Fatalf("Firestoreクライアントの作成に失敗しました: %v", err)
	}
	defer client.Close()

	iter := client.Collection("blogs").Documents(context.Background())
	defer iter.Stop()

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("ドキュメントの取得に失敗しました: %v", err)
		}

		var blog Blog
		if err := doc.DataTo(&blog); err != nil {
			return nil, fmt.Errorf("データのマッピングに失敗しました: %v", err)
		}

		blog.ID = doc.Ref.ID
		results = append(results, blog)
	}

	return results, nil
}

func GetBlogByIDHandler(id string) (*Blog, error) {
	client, err := database.App.Firestore(context.Background())
	if err != nil {
		log.Fatalf("Firestoreクライアントの作成に失敗しました: %v", err)
	}
	defer client.Close()

	// Firestoreから特定のドキュメントを取得
	doc, err := client.Collection("blogs").Doc(id).Get(context.Background())
	if err != nil {
		return nil, fmt.Errorf("ドキュメントの取得に失敗しました: %v", err)
	}

	// 取得したデータをBlog構造体にマッピング
	var blog Blog
	if err := doc.DataTo(&blog); err != nil {
		return nil, fmt.Errorf("データのマッピングに失敗しました: %v", err)
	}

	// ドキュメントIDをセット
	blog.ID = doc.Ref.ID

	return &blog, nil
}
