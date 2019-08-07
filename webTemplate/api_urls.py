from rest_framework import routers
from . import api_viewset


router = routers.DefaultRouter()
router.register('api/subject',  api_viewset.SubjectViewSet, 'subject')
router.register('api/section',  api_viewset.SectionViewSet, 'section')
router.register('api/article',  api_viewset.ArticleViewSet, 'article')
router.register('api/paragraph',  api_viewset.ParagraphViewSet, 'paragraph')


urlpatterns = router.urls
