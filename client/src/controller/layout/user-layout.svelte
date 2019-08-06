<script>
  import { spa } from "@slick-for/svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="/assets/fonts/materialdesignicons/materialdesignicons.min.css" />
</svelte:head>

<aside class="admin-sidebar sidebar-show">
  <div class="admin-sidebar-brand">
    <!-- begin sidebar branding-->
    <img
      class="admin-brand-logo"
      src="assets/img/logo.svg"
      width="40"
      alt="atlas Logo" />
    <span class="admin-brand-content">
      <a use:spa href="/">Slick-For</a>
    </span>
    <!-- end sidebar branding-->
    <div class="ml-auto">
      <!-- sidebar pin-->
      <a href="#" class="admin-pin-sidebar btn-ghost btn btn-rounded-circle" />
      <!-- sidebar close for mobile device-->
      <a href="#" class="admin-close-sidebar" />
    </div>
  </div>
  <div class="admin-sidebar-wrapper js-scrollbar">
    <!-- Menu List Begins-->
    <ul class="menu">
      <!--list item begins-->
      <li class="menu-item active">
        <a use:spa href="/" class="menu-link">
          <span class="menu-label">
            <span class="menu-name">Slick</span>
          </span>
          <span class="menu-icon">
            <i class="icon-placeholder mdi mdi-code-tags " />
          </span>
        </a>
      </li>
      <!--list item ends-->

      <!--list item begins-->
      <li class="menu-item ">
        <a href="/purpose" class="open-dropdown menu-link">
          <span class="menu-label">
            <span class="menu-name">Introduction</span>
          </span>
          <span class="menu-icon">
            <i class="icon-placeholder mdi mdi-code-braces " />
          </span>
        </a>

        <ul class="sub-menu">
          <li class="menu-item ">
            <a use:spa href="/purpose" class="open-dropdown menu-link">
              <span class="menu-label">
                <span class="menu-name">Introduction</span>
              </span>
              <span class="menu-icon">
                <i class="icon-placeholder mdi mdi-code-braces " />
              </span>
            </a>
          </li>

          <li class="menu-item ">
            <a use:spa href="/purpose#routing" class="open-dropdown menu-link">
              <span class="menu-label">
                <span class="menu-name">Routing</span>
              </span>
              <span class="menu-icon">
                <i class="icon-placeholder mdi mdi-code-braces " />
              </span>
            </a>
          </li>

          <li class="menu-item ">
            <a use:spa href="/purpose#svelte" class="open-dropdown menu-link">
              <span class="menu-label">
                <span class="menu-name">Svelte</span>
              </span>
              <span class="menu-icon">
                <i class="icon-placeholder mdi mdi-code-braces " />
              </span>
            </a>
          </li>

        </ul>
      </li>
      <!--list item ends-->

      <!--list item begins-->
      <li class="menu-item ">

        <a use:spa href="/decorators" class="open-dropdown menu-link">
          <span class="menu-label">
            <span class="menu-name">Decorators</span>
          </span>
          <span class="menu-icon">
            <i class="icon-placeholder mdi mdi-link-variant " />
          </span>
        </a>

      </li>
      <li class="menu-item ">

        <a use:spa href="/provider" class="open-dropdown menu-link">
          <span class="menu-label">
            <span class="menu-name">Providers</span>
          </span>
          <span class="menu-icon">
            <i class="icon-placeholder mdi mdi-link-variant " />
          </span>
        </a>

      </li>
      
      <!--list item ends-->
    </ul>
    <!-- Menu List Ends-->
  </div>

</aside>
<!--sidebar Ends-->

<main class="admin-main">

  <!--site header begins-->
  <header class="admin-header">

    <a
      href="#"
      class="sidebar-toggle"
      data-toggleclass="sidebar-open"
      data-target="body" />

    <nav class=" mr-auto my-auto">
      <ul class="nav align-items-center">

        <li class="nav-item">
          <a
            class="nav-link "
            data-target="#siteSearchModal"
            data-toggle="modal"
            href="#">
            <i class=" mdi mdi-magnify mdi-24px align-middle" />
          </a>
        </li>
      </ul>
    </nav>
    <nav class=" ml-auto">
      <ul class="nav align-items-center">

        <li class="nav-item">
          <div class="dropdown">
            <a
              href="#"
              class="nav-link"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i class="mdi mdi-24px mdi-bell-outline" />
            </a>

            <div
              class="dropdown-menu notification-container dropdown-menu-right">
              <h6 class="dropdown-header text-center">
                <span class="mdi mdi-bell-ring" />
                You have 4 New Messages
              </h6>

              <div class="notification-events">
                <div class="list-group list-group-flush">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action text-info
                    text-truncate">
                    <i class="mdi mdi-alert text-info" />
                    5 new members joined today
                  </a>

                </div>
              </div>
              <a class="dropdown-item text-center" href="#">View All</a>

            </div>
          </div>
        </li>
        <li class="nav-item dropdown ">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <div class="avatar avatar-sm avatar-online">
              <span class="avatar-title rounded-circle bg-accent">V</span>

            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="">

            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </li>

      </ul>

    </nav>
  </header>
  <!--site header ends -->
  <section class="admin-content">
    <!-- BEGIN PlACE PAGE CONTENT HERE -->
    <!--  container or container-fluid as per your need           -->
    <slot />
    <!-- END PLACE PAGE CONTENT HERE -->
  </section>
</main>

<div
  class="modal slide-left fade"
  id="siteSearchModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="siteSearchModal"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-body p-all-0" id="site-search">
        <button
          type="button"
          class="close light"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="form-dark bg-accent text-white p-t-60 p-b-20 bg-dots">
          <h3 class="text-uppercase text-center fw-300 ">Search</h3>

          <div class="container-fluid">
            <div class="col-md-10 p-t-10 m-auto">
              <input
                type="search"
                placeholder="Search Something"
                class=" search form-control form-control-lg" />

            </div>
          </div>
        </div>
        <div class="">
          <div
            class="bg-accent text-muted container-fluid p-b-10 text-center
            text-overline">
            results
          </div>
          <ul class="list-group list ">

            <div class="list-group-item d-flex align-items-center">
              <div class="m-r-20">
                <div class="avatar avatar-sm ">
                  <img
                    class="avatar-img rounded-circle"
                    src="assets/img/users/user-3.jpg" />
                </div>
              </div>
              <div class="">
                <div class="name">Eric Chen</div>
                <div class="text-muted">Developer</div>
              </div>

            </div>

          </ul>
        </div>

      </div>

    </div>
  </div>
</div>
