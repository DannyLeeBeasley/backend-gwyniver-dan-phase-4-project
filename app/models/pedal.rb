class Pedal < ApplicationRecord
  belongs_to :user
  belongs_to :pedal_board
end
