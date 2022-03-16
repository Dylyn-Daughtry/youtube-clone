from django.db import models
from django.contrib.auth import get_user_model 

User = get_user_model()

# Create your models here.
class Comments(models.Model):
    user = models.ForeignKey(User, db_column='user_id', on_delete=models.CASCADE)
    video_id = models.CharField(max_length=500)
    text = models.CharField(max_length=250)
    likes = models.IntegerField()
    dislikes = models.IntegerField()



class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comments, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)