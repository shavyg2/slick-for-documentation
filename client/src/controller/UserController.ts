//src/controllers/UserController.ts
import { Controller, View, Param, Query, History } from "@slick-for/svelte";
//Regular svelte component. Confused ? https://svelte.dev/tutorial/basics
import HomePage from "./pages/home.svelte";
import UserPage from "./pages/user.svelte";
import { GithubApi } from "../services/github-api";
import UserLayout from "./layout/user-layout.svelte"
import Purpose from "./pages/purpose.svelte";
import Decorators from "./pages/decorators.svelte";
import Provider from "./pages/providers.svelte";

@Controller("/",{
    layout:UserLayout
})
export class UserController {

  
  @View("/", HomePage)
  async homepage(@History() history:any) {
    history.push("/purpose")
    return {}
  }

  @View("/purpose",Purpose)
  async getPurposePage(){
    return {}
  }

  @View("/decorators",Decorators)
  async getDecoratorsPage(){
    return {}
  }



  @View("/provider",Provider)
  async getProviderPage(){
    return {}
  }
}
