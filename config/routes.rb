Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :events, only: [:create, :destroy, :index, :show, :update] do
      resources :showtimes, only: [:create, :destroy, :index] do
        resources :tickets, only: [:create, :destroy, :index] do
        end
      end
    end

    resources :showtimes, only: [:show, :update]
    resources :tickets, only: [:update]
  end
end
