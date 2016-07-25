from django.contrib.auth.models import User
from rest_framework import serializers

from Pentagram.models import Photo, Comment


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'user', 'photo')

    def create(self, validated_data):
        photo = Photo.objects.create(**validated_data)
        return photo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'photo_id', 'comment')

    def create(self, validated_data):
        comment = Comment.objects.create(**validated_data)
        return comment