<template>
<div class="container">
	<div class="row">
			<div class="col-md-3 col-xs-3">
				<div class="list-group">
					<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1"><img src="~/assets/search.svg">Search party</h5>
						</div>
						<p class="mb-1">Search public random party</p>
					</a>
					<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1"><img src="~/assets/join.svg">Join party</h5>
						</div>
						<p class="mb-1">Join existing party trought token</p>
					</a>
					<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">Create party</h5>
						</div>
						<p class="mb-1">Get and share token.</p>
					</a>
				</div>
			</div>

			<div class="col-md-9 col-xs-9">
				<div id="stats" class="card">
					<div class="container">
						<Stats/>
					</div>
				</div>
			</div>
	</div>
</div>
</template>

<script>
import Stats from '~/components/Stats'

export default {
	components: {
		Stats
	}
}
</script>


<style>
#stats {
	min-height: 400px;
}
</style>
