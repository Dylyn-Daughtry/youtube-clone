from django.db import models

class Comments(models.Model):
    user = models.ForeignKey()
    video_id = models.CharField(max_length=500)
    text = models.CharField(max_length=250)
    likes = models.IntegerField()
    dislikes = models.IntegerField()



class Reply(models.Model):
    user = models.ForeignKey()
    comment = models.ForeignKey
    text = models.CharField(max_length=255)