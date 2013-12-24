class WelcomeController < ApplicationController
	def index
		@viewer = Viewer.new
	end
end