Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resource :session, only: [:new, :create, :destroy, :index]
    resource :user, only: [:create, :show]

    resources :events, only: [:create, :destroy, :index, :show, :update] do
      resources :showtimes, only: [:create, :show, :destroy, :index] do
        resources :tickets, only: [:create, :show, :destroy, :index] do
        end
      end
    end

    resources :showtimes, only: [:index, :show, :update]
    resources :tickets, only: [:index, :show, :update]
  end
end
