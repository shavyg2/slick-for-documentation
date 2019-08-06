<script>
  export let users;
  export let page;
  import { CurrentQuery, spa } from "@slick-for/svelte";
</script>

<div class="navigation flex flex-row justify-around mb-5">
  <div>
    <a use:spa href={`?page=${Math.max(parseInt(page) - 1, 1)}`}>Prev</a>
  </div>

  <div>
    <a use:spa href={`?page=${Math.max(parseInt(page) + 1, 1)}`}>Next</a>
  </div>
</div>
<div class="flex flex-row flex-wrap">
  {#each users as user}
    <a class="px-4" href={`/user/${user.login}`} use:spa>
      <div class="card m-b-30">
        <div class="card-header flex flex-row justify-center">
          <h5 class="card-title m-b-0 capitalize">{user.login}</h5>
        </div>
        <div class="card-body">

          <img
            class="mb-3 rounded-full border shadow"
            width="150"
            src={user.avatar_url}
            alt="avatar" />
        </div>
        <div class="card-footer flex flex-row justify-center">
          <a use:spa href={`/user/${user.login}`} class="btn btn-primary text-white">Profile</a>
        </div>
      </div>
    </a>
  {/each}
</div>