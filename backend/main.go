package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/noko-nokono/my-blog/backend/api"
	"github.com/noko-nokono/my-blog/backend/database"
)

func main() {
	r := gin.Default()

	database.FireStoreInit()

	results, err := api.GetBlogsHandler()
	if err != nil {
		log.Fatal(err)
	}

	// ブログ記事一覧を返すエンドポイント
	r.GET("/blog", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "success",
			"data":   results,
		})
	})

	// 特定のブログ記事を返すエンドポイント
	r.GET("/blog/:id", func(c *gin.Context) {
		id := c.Param("id")
		result, err := api.GetBlogByIDHandler(id)
		if err != nil {
			log.Fatal(err)
		}

		c.JSON(http.StatusOK, gin.H{
			"status": "success",
			"data":   result,
		})
	})

	r.Run(":8080")
}
