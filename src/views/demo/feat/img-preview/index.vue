<template>
  <PageWrapper title="图片预览示例">
    <ImagePreview :imageList="imgList" />
    <a-button @click="openImg" type="primary">无预览图</a-button>
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createImgPreview, ImagePreview } from "/@/components/Preview/index";
import { PageWrapper } from "/@/components/Page";
// import { PreviewActions } from '/@/components/Preview/src/typing';

const imgList: string[] = ["https://picsum.photos/id/66/346/216", "https://picsum.photos/id/67/346/216", "https://picsum.photos/id/68/346/216"];
export default defineComponent({
  components: { PageWrapper, ImagePreview },
  setup() {
    function openImg() {
      const onImgLoad = ({ index, url, dom }) => {
        console.log(`第${index + 1}张图片已加载，URL为：${url}`, dom);
      };
      // 可以使用createImgPreview返回的 PreviewActions 来控制预览逻辑，实现类似幻灯片、自动旋转之类的骚操作
      createImgPreview({ imageList: imgList, defaultWidth: 700, rememberState: true, onImgLoad });
    }
    return { imgList, openImg };
  },
});
</script>
