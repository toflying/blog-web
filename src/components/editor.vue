<template>
  <div id="editor">
    <h1>this is a page Editor{{editor}}</h1>
    <div class="content">
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
    </div>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  components: { quillEditor },
  data() {
    return {
      msg: "editor",
      editorOption:null,
      content:null
    };
  },
  computed: {
      editor() {
        return this.$refs.myQuillEditor
      }
  },
  mounted() {},
  methods: {
      onEditorBlur(e){
          console.log(e);
      },
      onEditorFocus(e){
          console.log(e);
      },
      onEditorReady(e){
          console.log(e);
      }
  },
};
</script>
<style lang="less" scoped>
#editor {
  width: 1200px;
  height: 550px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #dddddd;
}
</style>