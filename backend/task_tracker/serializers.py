from rest_framework import serializers
from .models import TaskTracker


class TaskTrackerSerializer(serializers.ModelSerializer):
	class Meta:
		model = TaskTracker
		fields = ('id', 'title', 'description', 'completed')
