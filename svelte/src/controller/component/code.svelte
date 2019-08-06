<script>
    import {onMount} from "svelte";
    import hljs from 'highlight.js/lib/highlight';
    import typescript from 'highlight.js/lib/languages/typescript';
    import xml from 'highlight.js/lib/languages/xml';
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('xml', xml);
    
    import 'highlight.js/styles/github.css';
    let editor;


    onMount(()=>{
        hljs.highlightBlock(editor);
    })

    console.log($$props.$$slots)

</script>


<pre class="w-full md:w-3/4 ">
  <code class="bg-white border border-gray-100 my-3 p-4" bind:this={editor}>
    <slot />
  </code>
</pre>
