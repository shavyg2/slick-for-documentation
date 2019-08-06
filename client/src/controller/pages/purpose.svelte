<script>
    import Code from "../component/code.svelte";
    import Text from "../component/text.svelte";
</script>




<article class="container pb-10">
    
    <h2 class="text-4xl my-3 mx-auto md:w-3/4">Introduction</h2>


    <section class="mx-auto md:w-3/4">
    
        <h1 class="text-lg">What is <span class="inline">@slick-for/svelte</span></h1>

        <Text>
            Write Beautiful easy to maintain code with <a href="https://svelte.dev/">svelte</a> and following some key design principles, while maintaining full control of 
            your application.
        </Text>

        <Text>
            Defined routes and get the data required for the view upfront. This will remove logic from your view templates and leave logic inside
            your controller method using typescript which is where logic is best lived.
        </Text>

        <Code>{`

@Controller("/user/")
export class UserController {



    @View("/home", HomePage)
    async homepage(userapi: GithubApi, @Query("page") page = 1) {
        let users = await userapi.getPage(page);

        return {
            users: users
        };
    }

    @View("/:username", UserPage)
    async getUserPage(api: GithubApi, @Param("username") username: string) {
        let user = await api.getUserByName(username);
        return {
            user
        };
    }

}
        `.trim()}
        </Code>
  
    </section>



    <section id="inspiration" class="mx-auto md:w-3/4 mt-5">
    
        <h2 class="text-lg">Inspiration</h2>

        <Text>
            One aspect of creating a great user interface is drawing on familiarity of a user. The same can be applied to creating a 
            great api.
        </Text>
        

        <ul class="list-inside">
            <li> What are the routes defined above? </li>
            <li> What can be passed as a parameter for the routes?</li>
            <li> Are there any query string params that can be passed? is it required?</li>
        </ul>  

        <Text>
            When i started using <a href="https://nestjs.com/">nestjs</a> one of the thing I noticed about the framework, was 
            how easy, and clear it made it for developers to understand what the intent behind the code was.

            This library is heavily inspired by their clear and concise approach to developing a backend service by translated to the frontend.
        </Text>  
    </section>
    
    
    
    
    <section id="routing" class="mx-auto md:w-3/4 mt-5">
    
        <h2 class="text-lg">Routing</h2>

        <Text>
            Routing is simplified and provide the opportunity for you, to gather the data that you need upfront.
            This greatly reduces the amount of work that needs to get done in the component itself.
        </Text>
        

                <Code>{`

@Controller("/controller/example/")
export class Controller {



    @View("/demo", Example)
    async homepage(api: ApiInfomation, @Query("page") page = 1) {
        let demos  = await api.getPageData(page)

        return demos
    }
}
        `.trim()}
        </Code>

        <Text>
            In the above code you can see the controller route which is 
            <span class="inline">/controller/example</span>.
            This means that all of the views will be using this as it's base route.
        </Text>  
        <Text>
            The view is 
            <span class="inline">/demo</span>.

            For the view please note that the data returned needs to be an object as the keys are using as the props
             
        </Text>  
    </section>




    <section id="svelte" class="mx-auto md:w-3/4 mt-5">
    
        <h2 class="text-lg">Svelte</h2>

        <Text>
            Integrating with Svelte is pretty simple
        </Text>
        

                <Code>{`

    @View("/demo", Example)
    async homepage(api: ApiInfomation, @Query("page") page = 1) {
        let demos  = await api.getPageData(page)

        return {
            title:"Demo",
            demos:demos
        }
    }
}
        `.trim()}
        </Code>


                <Code>{`
<script>
    export let title;
    export let demos;
</script>


<h1>{title}</h1>

{#each demos as demo}
    <div class="demo">{@html demo}</div>
{/each}


        `.trim()}
        </Code>

        <Text>
            Once you have a controller it's easy for you to pass data to the view. Just return an object and this will 
            be passed to the view with each of the object keys as a property.
        </Text>  
    </section>



    

</article>




<style>
    ul{
        list-style-type: disc;
    }

    li{
        margin-top:10px;
        margin-bottom:10px;
    }
</style>