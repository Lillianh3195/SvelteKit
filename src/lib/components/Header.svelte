<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/register">Register</a>
			</li>
		</ul>
    </nav>
</header>


  <style>
    header {
      padding: 1rem;
      background: lightskyblue;
      display: flex;
      flex-wrap: wrap;
      justify-content: right;
    }
    
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    </style>

  