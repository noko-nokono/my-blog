package main

import (
	"github.com/gin-gonic/gin"
	"github.com/noko-nokono/my-blog/backend/api"
	"github.com/noko-nokono/my-blog/backend/database"
)

func main() {
	r := gin.Default()

	database.FireStoreInit()

	// ブログ記事一覧を返すエンドポイント
	r.GET("/blog", api.HandleAPI(api.GetBlogsHandler))
	// 特定のブログ記事を返すエンドポイント
	r.GET("/blog/:id", api.HandleParamsAPI(api.GetBlogByIDHandler))

	r.Run(":8080")
}
