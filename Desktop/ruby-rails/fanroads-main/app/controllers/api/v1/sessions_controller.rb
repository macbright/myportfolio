class Api::V1::SessionsController < ApplicationController

  before_action :sign_in_params, only: :create
  before_action :load_user, only: :create
  before_action :authenticate_user!, only: :destroy
  # sign in
  def create
    if @user.valid_password?(sign_in_params[:password])
      sign_in "user", @user
      curr_user = @user
      render json: @user.as_json(only: [:email,  :authentication_token]), status: 200
    else
      head{:unauthorized}
    end
  end

  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    head :no_content
    
  end


  private
  def sign_in_params
    params.permit(:email, :password)
  end

  def load_user
    @user = User.find_by(email: sign_in_params[:email])
    if @user
      return @user
    else
      render json: {
        messages: "Cannot get User",
        is_success: false,
        data: {}
      }, status: 402
    end
  end
end