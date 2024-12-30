package main

import (
	"github.com/gin-gonic/gin"
	"github.com/noko-nokono/my-blog/backend/api"
	"github.com/noko-nokono/my-blog/backend/database"
)

func main() {
	r := gin.Default()

	database.FireStoreInit()

	route := r.Group("/api")
	{
		route.GET("/blog", api.HandleAPI(api.GetBlogsHandler))
		// 特定のブログ記事を返すエンドポイント
		route.GET("/blog/:id", api.HandleParamsAPI(api.GetBlogByIDHandler))
	}
	// ブログ記事一覧を返すエンドポイント

	r.Run(":8080")
}
