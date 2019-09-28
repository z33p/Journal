from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    # Retorna a pk do atributo "subject_set" de alguma instância de Subject
    subject_set = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    # Correlaciona a pk de "subject_set" com a "StringRelatedField"
    subject_name = serializers.StringRelatedField(
        source="subject_set", many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'subject_set', 'subject_name')
        # fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
