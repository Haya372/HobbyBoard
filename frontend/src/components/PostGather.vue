<template>
 <div id="PostGather">
  <div class="container">
    <div class="card">
      <h3 class="card-header">Post Gather</h3>
      <div class="card-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" name="title" id="title" placeholder="Feed title.">
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <input type="text" class="form-control" name="content" id="content" placeholder="Feed content.">
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" name="is_secret" id="is_secret">
              <label class="custom-control-label" for="is_secret">If you wish to post it anonymousely, check it.</label>
            </div>
            <input type="hidden" name="user_id" value="">

            <br>
            <button type="button" class="btn btn-primary">Post</button>
          </form>
      </div>
    </div>
  </div>

 </div>
</template>

<script>
export default {
  name: 'PostGather',
  }
</script>

<style scoped>
</style>
