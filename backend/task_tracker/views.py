from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskTrackerSerializer
from .models import TaskTracker

# Create your views here.


class TaskTrackerView(viewsets.ModelViewSet):
	serializer_class = TaskTrackerSerializer
	queryset = TaskTracker.objects.all()
