	</main><!-- Site Main / End -->

	<footer id="footer" class="clearfix" role="contentinfo" <?php hybrid_attr( 'footer' ); ?>>

		<?php get_sidebar( 'footer' ); ?>

		<?php get_template_part( 'footer', 'instagram' ); ?>

		<!-- Site Bottom / Start -->
		<div id="site-bottom" class="container clearfix">

			<div class="copyright">
				<a>© 2019 TENNIS TỔNG HỢP * Designed by NDTeam Studio</a>
			</div><!-- .copyright -->

				<div class="backtotop">
					<a href="#top"><?php _e( 'Back To Top', 'easynote' ); ?> <i class="fa fa-angle-up"></i></a>
				</div>
			</div>
			<!-- Site Bottom / End -->

		</footer><!-- #footer -->

	</div><!-- #page -->

	<?php wp_footer(); ?>

</body>
</html>
