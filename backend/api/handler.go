package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// TODO: ジェネリクスで使用しているanyの削除
func HandleAPI[T any](handler func() (T, error)) gin.HandlerFunc {
	return func(c *gin.Context) {
		data, err := handler()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "error",
				"message": err.Error(),
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"status": "success",
			"data":   data,
		})
	}
}

// TODO: ジェネリクスで使用しているanyの削除
// TODO: id以外のパラメータを受け取れるようにする
func HandleParamsAPI[T any](handler func(id string) (T, error)) gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Param("id")

		data, err := handler(id)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "error",
				"message": err.Error(),
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"status": "success",
			"data":   data,
		})
	}
}
