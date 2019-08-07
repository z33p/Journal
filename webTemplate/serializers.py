from rest_framework import serializers
# from django.contrib.auth.models import User, Group

from .models import Subject
from .models import Section
from .models import Article
from .models import Paragraph


# Journal serializers
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = '__all__'


# class JournalSerializer(serializers.Serializer):
#     subjects = SubjectSerializer(many=True)
#     sections = SectionSerializer(many=True)
#     articles = ArticleSerializer(many=True)
#     paragraphs = ParagraphSerializer(many=True)
