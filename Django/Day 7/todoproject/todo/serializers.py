from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    time_since_creation = serializers.SerializerMethodField()
    
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'created_at', 
                 'updated_at', 'priority', 'time_since_creation']
        read_only_fields = ['created_at', 'updated_at']

    def get_time_since_creation(self, obj):
        from django.utils import timezone
        from django.utils.timesince import timesince
        return timesince(obj.created_at, timezone.now())

    def validate_title(self, value):
        if len(value.strip()) < 3:
            raise serializers.ValidationError("Title must be at least 3 characters long")
        return value.strip()

    def validate(self, data):
        if data.get('completed') and not data.get('description'):
            raise serializers.ValidationError(
                "Please add a description before marking the task as completed"
            )
        return data