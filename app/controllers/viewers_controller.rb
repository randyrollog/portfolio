class ViewersController < ApplicationController
	def create
		@viewer = Viewer.new(viewer_params)
		if @viewer.save
			redirect_to root_url
		end
	end

	private

	def viewer_params
		params.require(:viewer).permit(:name, :email, :phone_no, :company, :budget, :description)
	end

end