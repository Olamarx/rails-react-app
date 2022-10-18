class Api::V1::GreetingsController < ApplicationController
  def index
    # random = rand()
    # @greetings = Greeting.all.
    # render json: @greetings

    offset = rand(Greeting.count)
    @rand_record = Greeting.offset(offset).first
    render json: @rand_record
  end
end
