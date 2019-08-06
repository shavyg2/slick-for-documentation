<script>
    import Code from "../component/code.svelte";
    import Text from "../component/text.svelte";
</script>




<article class="container pb-10">
    
    <h2 class="text-4xl my-3 mb-4 mx-auto md:w-3/4">Decorators</h2>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@Controller</h1>

        <Text>
            The controller decorator is used to make a class as a controller.
            This allows methods to use the @View Decorator to complete the routes.
            Regular methods can be called as well. As this allows classic OOP actions.

        </Text>

        <Code>{`

@Controller("/route/path")
export class UserController {

}
        `.trim()}
        </Code>
  
    </section>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@View</h1>

        <Text>
            The view decorator allows you to specify a route for the route and a specific svelte template that should be used to render the page.
        </Text>
        
        <table>
            <thead>
                <th>Index</th>
                <th>Name</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>View Path</td>
                    <td>The url that the application should route to.</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Svelte Component</td>
                    <td>The default export from a .svelte component</td>
                </tr>
            </tbody>
        </table>

        <Code>{`

@Controller("/route/path")
export class UserController {

    @View("/page",Page)
    getPage(){
        let title = "page title";
        return {
            title
        }
    }
}
        `.trim()}
        </Code>
  
    </section>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@Inject</h1>

        <Text>
            Inject allows a provider to be accessed within the constructor or a view method,
            Constructor and view methods are automatically inflated with the required dependencies.
        </Text>
        <Text>
            This is useful for providers that are not classes, and need to use an identifier.
        </Text>

        <Code>{`

@Controller("/route/path")
export class UserController {
    constructor(@Inject("image-api") private imgApiUrl:string){

    }
}
        `.trim()}
        </Code>
    </section>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@Param</h1>

        <Text>
            This gives access to parameters that have been sent using the url.
            eg <span>/user/:username</span> you would be able to get the username 
            using the @Param decorator.
        </Text>

        <Code>{`

@Controller("/user")
export class UserController {
    @View("/:username",Page)
    getUserPage(@Param('username') username:string){
        console.log(username) // eg /user/bobby  would print 'bobby'
    }
}
        `.trim()}
        </Code>

        <table>
            <thead>
                <th>Index</th>
                <th>Name</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>Key</td>
                    <td>
                        <p>
                            If a key is provided it will get the specific key from the parameter.
                        </p>
                        <p>
                            Otherwise is will return the entire param object.
                        </p>
                    </td>
                </tr>
                
            </tbody>
        </table>
  
    </section>

    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@Query</h1>

        <Text>
            This is basically the same as the @Param except it gathers the data from the
            query string on url. left blank and it will get the entire query object.
        </Text>

        <Code>{`

@Controller("/user")
export class UserController {
    @View("/:username",Page)
    getUserPage(@Param('username') username:string, @Query('detail')){
        console.log(username) 
        console.log(detail)
        /*
            eg /user/bobby?detail=full
            'bobby'
            'full'
        */
    }
}
        `.trim()}
        </Code>
  
    </section>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@Injectable</h1>

        <Text>
            This can be used to define a service class that 
            you would like access to inside your main application.

            You can define the scope of the class.

        </Text>

        <Code>{`

@Injectable({
    scope:"Singleton"
})
export class MyService{
    getData(){
        //data
    }
}
        `.trim()}
        </Code>
  
    </section>


    <section class="mx-auto md:w-3/4 mt-5">
    
        <h1 class="text-lg">@History</h1>

        <Text>
            This can be used to access the history api directly.
            It allows for a redirect to a different url based on 
            what ever condition you want to have.

        </Text>

        <Code>{`

@Controller("/user")
export class UserController {
    @View("/:username",Page)
    getUserPage(@History() history:any){
        // not allowed
        history.replace("/404")
    }
}
        `.trim()}
        </Code>
  
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