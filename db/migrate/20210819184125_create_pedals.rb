class CreatePedals < ActiveRecord::Migration[6.1]
  def change
    create_table :pedals do |t|
      t.string :name
      t.string :effect_type
      t.integer :price
      t.boolean :stereo
      t.integer :number_of_inputs
      t.integer :number_of_outputs
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :pedal_board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
