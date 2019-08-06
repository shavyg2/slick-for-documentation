<script>
  import Code from "../component/code.svelte";
  import Text from "../component/text.svelte";
</script>

<style>
  ul {
    list-style-type: disc;
  }
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<article class="container pb-10">

  <h2 class="text-4xl my-3 mb-4 mx-auto md:w-3/4">Providers</h2>

  <section class="mx-auto md:w-3/4 mt-5">
    <Text>
      Providers give a way for you to provide the different instances to a class
      that you may need. A provider provides the blueprint for how to
      instanciate a call and what dependencies are needed for it.
    </Text>
  </section>

  <section class="mx-auto md:w-3/4 mt-5">

    <h1 class="text-lg">Class Provider</h1>

    <Text>
      The class provider is the most basic and allows you to create a class
      almost as you normally would. Notice the @Inject with the identifier. The
      identifier will become clear as most other providers use them. With
      Classes the identifier is the class itself. Interfaces are compiled away
      and not possible to be used.
    </Text>

    <Code>
      {`

@Injectable()
export class Service{
    constructor(@Inject(identifier)){

    }

}
        `.trim()}
    </Code>

  </section>

  <section class="mx-auto md:w-3/4 mt-5">

    <h1 class="text-lg">Value Provider</h1>

    <Text>
      The use value provider can be useful for thing like url endpoints. or
      classes that you want to configure and then passed to the application. You
      can just define it in one location and provide it and everything else will
      be able to depend on it.
    </Text>

    <Text>
      When this provider name
      <span class="inline">example_service</span>
      is used. The string 'example' will be passed in.
    </Text>

    <Code>
      {`


export const example_service = Symbol.for('example')

export const example_provider = {
    provide:example_service

    useValue:'example'
}
        `.trim()}
    </Code>
  </section>


  <section class="mx-auto md:w-3/4 mt-5">

    <h1 class="text-lg">Factory Provider</h1>

    <Text>
      The Factory provider allows you to construct an instance.
      You can use previous providers to build the current one.
      The factory can return promises, This is not issue as promises
      are always resovled before passing to constructors, or method
    </Text>

    <Text>
      When this provider name
      <span class="inline">example_service</span>
      is used. The string 'example' will be passed in.
    </Text>


    <Text>
      Pay attention to the inject property, you are not able to add a decorator to the use factory method.
      This is why the property inject is available so dependencies can be instanciated and added to class.
    </Text>

    <Code>
      {`


export const async_service = Symbol.for('async')

export const async_provider = {
    provide:async_service,

    async useFactory(service_name:string){
        //
        return {
            getname(){
                return service_name
            }
        }
    },


    inject:[example_service]
}
        `.trim()}
    </Code>
  </section>
</article>
