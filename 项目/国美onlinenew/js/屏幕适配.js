/(iPhone|iPad|iPhone OS|Phone|iPod|iOS)/i.test(navigator.userAgent) && (head = document.getElementsByTagName("head"),
	viewport = document.createElement("meta"), viewport.name = "viewport", viewport.content =
	"target-densitydpi=device-dpi, width=375px, user-scalable=no", head.length > 0 && head[head.length - 1].appendChild(
		viewport));
